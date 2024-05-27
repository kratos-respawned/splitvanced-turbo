import { Sheet } from "@tamagui/sheet";
import React from "react";
import { Button } from "tamagui";
export const BottomSheet = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
BottomSheet.Sheet = ({
  children,
  open,
  setOpen,
  snapPoints=["fit"],
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  snapPoints?: string[]|number[]|(string|number)[];
}) => (
  <Sheet
    forceRemoveScrollEnabled={open}
    open={open}
    modal
    onOpenChange={setOpen}
    snapPoints={snapPoints}
    snapPointsMode={"mixed"}
    dismissOnSnapToBottom
    // position={position}
    // onPositionChange={setPosition}
    zIndex={100_000}
    animation="quick"
    // animation="medium"
  >
    <Sheet.Overlay
      animation="quick"
      enterStyle={{ opacity: 0 }}
      exitStyle={{ opacity: 0 }}
    />
    <Sheet.Handle  />
    <Sheet.Frame
      padding="$4"
      justifyContent="center"
      alignItems="center"
      gap="$5"
    >
      {children}
    </Sheet.Frame>
  </Sheet>
);

BottomSheet.Trigger = ({
  children,
  setOpen,
}: {
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => <Button onPress={() => setOpen(true)}>{children}</Button>;
BottomSheet.Close = ({
  children,
  setOpen,
}: {
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => <Button onPress={() => setOpen(false)}>{children}</Button>;
