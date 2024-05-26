// import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import type { SheetProps } from '@tamagui/sheet'
import { Sheet, useSheet } from '@tamagui/sheet'
import { useState } from 'react'
import { Pressable } from 'react-native'
import { Button, H1, H2, Input, Paragraph, XStack, YStack } from 'tamagui'

const spModes = ['percent', 'constant', 'fit', 'mixed'] as const

export const SheetDemo = () => {
  const [position, setPosition] = useState(0)
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(true)
  const [innerOpen, setInnerOpen] = useState(false)
  const [snapPointsMode, setSnapPointsMode] =
    useState<(typeof spModes)[number]>('percent')
  const [mixedFitDemo, setMixedFitDemo] = useState(false)

  const isPercent = snapPointsMode === 'percent'
  const isConstant = snapPointsMode === 'constant'
  const isFit = snapPointsMode === 'fit'
  const isMixed = snapPointsMode === 'mixed'
  const snapPoints = isPercent
    ? [85, 50, 25]
    : isConstant
      ? [256, 190]
      : isFit
        ? undefined
        : mixedFitDemo
          ? ['fit', 110]
          : ['80%', 256, 190]

  return (
    <>
      <YStack >
        <XStack  $sm={{ flexDirection: 'column', alignItems: 'center' }}>
          <Button onPress={() => setOpen(true)}>Open</Button>
          <Button onPress={() => setModal((x) => !x)}>
            {modal ? 'Type: Modal' : 'Type: Inline'}
          </Button>
          <Button
            onPress={() =>
              setSnapPointsMode(
                (prev) => spModes[(spModes.indexOf(prev) + 1) % spModes.length]
              )
            }
          >
            {`Mode: ${
              { percent: 'Percentage', constant: 'Constant', fit: 'Fit', mixed: 'Mixed' }[
                snapPointsMode
              ]
            }`}
          </Button>
        </XStack>
        {isMixed ? (
          <Button onPress={() => setMixedFitDemo((x) => !x)}>
            {`Snap Points: ${JSON.stringify(snapPoints)}`}
          </Button>
        ) : (
          <XStack paddingVertical="$2.5" justifyContent="center">
            <Paragraph>{`Snap Points: ${
              isFit ? '(none)' : JSON.stringify(snapPoints)
            }`}</Paragraph>
          </XStack>
        )}
      </YStack>

      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={snapPoints}
        snapPointsMode={snapPointsMode}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="medium"
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame padding="$4" justifyContent="center" alignItems="center" gap="$5">
          {/* <Button size="$6" circular icon={ChevronDown} onPress={() => setOpen(false)} /> */}
          <Pressable onPress={() => setOpen(false)}>
            <H1>Close</H1>
            </Pressable>
          <Input width={200} />
          {modal && isPercent && (
            <>
              
              {/* <Button
                size="$6"
                circular
                icon={ChevronUp}
                onPress={() => setInnerOpen(true)}
              /> */}
              <Pressable onPress={() => setInnerOpen(true)}>
                <H1>Open Inner Sheet</H1>
                </Pressable>
            </>
          )}
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

