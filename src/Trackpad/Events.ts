type ClickEvent = {
  type: "CLICK",
  button: "left" | "right" | "middle"
}
type DoubleClickEvent = {
  type: "DOUBLE_CLICK",
  button: "left" | "right" | "middle"
}

type MoveEvent = {
  type: "MOVE",
  x: number,
  y: number
}

type ScrollEvent = {
  type: "SCROLL",
  x: number,
  y: number
}

type DragEvent = {
  type: "DRAG",
  x: number,
  y: number
}

export const clickEvent: (button: "left" | "right" | "middle") => ClickEvent = (button) => ({
  type: "CLICK",
  button
})

export const doubleClickEvent: (button: "left" | "right" | "middle") => DoubleClickEvent = (button) => ({
  type: "DOUBLE_CLICK",
  button
})

export const moveEvent: (dir: { x: number, y: number }) => MoveEvent = (dir) => ({
  type: "MOVE",
  ...dir
})

export const scrollEvent: (dir: { x: number, y: number }) => ScrollEvent = (dir) => ({
  type: "SCROLL",
  ...dir
})

export const dragEvent: (dir: { x: number, y: number }) => DragEvent = (dir) => ({
  type: "DRAG",
  ...dir
})