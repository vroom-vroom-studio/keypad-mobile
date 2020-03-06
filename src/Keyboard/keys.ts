export type Key = {
  value: string;
  label: string;
  capLabel?: string;
  labelType?: "STRING" | "IMG"
}

interface Keys {
  numbers: Key[],
  letters: Key[],
  controls: Key[],
  arrows: Key[],
  utils: Key[]
}

const keys: Keys = {
  numbers: [
    {
      value: "1",
      label: "1",
      labelType: "STRING"
    },
    {
      value: "2",
      label: "2",
      labelType: "STRING"
    },
    {
      value: "3",
      label: "3",
      labelType: "STRING"
    },
    {
      value: "4",
      label: "4",
      labelType: "STRING"
    },
    {
      value: "5",
      label: "5",
      labelType: "STRING"
    },
    {
      value: "6",
      label: "6",
      labelType: "STRING"
    },
    {
      value: "7",
      label: "7",
      labelType: "STRING"
    },
    {
      value: "8",
      label: "8",
      labelType: "STRING"
    },
    {
      value: "9",
      label: "9",
      labelType: "STRING"
    },
    {
      value: "0",
      label: "0",
      labelType: "STRING"
    },
  ],
  letters: [
    {
      value: "q",
      label: "q",
      capLabel: "Q",
      labelType: "STRING"
    },
    {
      value: "w",
      label: "w",
      capLabel: "W",
      labelType: "STRING"
    },
    {
      value: "e",
      label: "e",
      capLabel: "E",
      labelType: "STRING"
    },
    {
      value: "r",
      label: "r",
      capLabel: "R",
      labelType: "STRING"
    },
    {
      value: "t",
      label: "t",
      capLabel: "T",
      labelType: "STRING"
    },
    {
      value: "y",
      label: "y",
      capLabel: "Y",
      labelType: "STRING"
    },
    {
      value: "u",
      label: "u",
      capLabel: "U",
      labelType: "STRING"
    },
    {
      value: "i",
      label: "i",
      capLabel: "I",
      labelType: "STRING"
    },
    {
      value: "o",
      label: "o",
      capLabel: "O",
      labelType: "STRING"
    },
    {
      value: "p",
      label: "p",
      capLabel: "P",
      labelType: "STRING"
    },
    {
      value: "a",
      label: "a",
      capLabel: "A",
      labelType: "STRING"
    },
    {
      value: "s",
      label: "s",
      capLabel: "S",
      labelType: "STRING"
    },
    {
      value: "d",
      label: "d",
      capLabel: "D",
      labelType: "STRING"
    },
    {
      value: "f",
      label: "f",
      capLabel: "F",
      labelType: "STRING"
    },
    {
      value: "g",
      label: "g",
      capLabel: "G",
      labelType: "STRING"
    },
    {
      value: "h",
      label: "h",
      capLabel: "H",
      labelType: "STRING"
    },
    {
      value: "j",
      label: "j",
      capLabel: "J",
      labelType: "STRING"
    },
    {
      value: "k",
      label: "k",
      capLabel: "K",
      labelType: "STRING"
    },
    {
      value: "l",
      label: "l",
      capLabel: "L",
      labelType: "STRING"
    },
    {
      value: "z",
      label: "z",
      capLabel: "Z",
      labelType: "STRING"
    },
    {
      value: "x",
      label: "x",
      capLabel: "X",
      labelType: "STRING"
    },
    {
      value: "c",
      label: "c",
      capLabel: "C",
      labelType: "STRING"
    },
    {
      value: "v",
      label: "v",
      capLabel: "V",
      labelType: "STRING"
    },
    {
      value: "b",
      label: "b",
      capLabel: "B",
      labelType: "STRING"
    },
    {
      value: "n",
      label: "n",
      capLabel: "N",
      labelType: "STRING"
    },
    {
      value: "m",
      label: "m",
      capLabel: "M",
      labelType: "STRING"
    },
  ],
  controls: [
    {
      value: "escape",
      label: "ESC",
      labelType: "STRING"
    },
    {
      value: "shift",
      label: "SHIFT",
      labelType: "STRING"
    },
    {
      value: "tab",
      label: "TAB",
      labelType: "STRING"
    },
    {
      value: "alt",
      label: "ALT",
      labelType: "STRING"
    },
    {
      value: "control",
      label: "CTRL",
      labelType: "STRING"
    },
    {
      value: "command",
      label: "CMD",
      labelType: "STRING"
    },
    {
      value: "space",
      label: "SPACE",
      labelType: "STRING"
    },
    {
      value: "backspace",
      label: "<-",
      labelType: "STRING"
    },
    {
      value: "enter",
      label: "ENTER",
      labelType: "STRING"
    },
  ],
  arrows: [
    {
      value: "up",
      label: "UP",
      labelType: "STRING"
    },
    {
      value: "down",
      label: "DOWN",
      labelType: "STRING"
    },
    {
      value: "right",
      label: "RIGHT",
      labelType: "STRING"
    },
    {
      value: "left",
      label: "RIGHT",
      labelType: "STRING"
    },
  ],
  utils: [
    {
      value: "audio_prev",
      label: "<<",
      labelType: "STRING"
    },
    {
      value: "audio_play",
      label: ">",
      labelType: "STRING"
    },
    {
      value: "audio_pause",
      label: "||",
      labelType: "STRING"
    },
    {
      value: "audio_next",
      label: ">>",
      labelType: "STRING"
    },
    {
      value: "audio_mute",
      label: "MUTE",
      labelType: "STRING"
    },
    {
      value: "audio_vol_down",
      label: "VOL-",
      labelType: "STRING"
    },
    {
      value: "audio_vol_up",
      label: "VOL+",
      labelType: "STRING"
    },
  ]
}

export default keys