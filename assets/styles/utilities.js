import { SIZES, COLORS } from "./theme"

/**
 * Flex system
 */
export const row = {
  flexDirection: "row"
}

export const itemsCenter = {
  alignItems: "center"
}

export const itemsEnd = {
  alignItems: "flex-end"
}

export const justifyCenter = {
  justifyContent: "center"
}

export const justifyBetween = {
  justifyContent: "space-between"
}

export const justifyEvenly = {
  justifyContent: "space-evenly"
}

export const justifyAround = {
  justifyContent: "space-around"
}

export const rowCenter = {
  ...row,
  ...itemsCenter
}

export const rowBetween = {
  ...row,
  ...justifyBetween
}

export const rowEvenly = {
  ...row,
  ...justifyEvenly
}

export const rowAround = {
  ...row,
  ...justifyAround
}

export const centerBetween = {
  ...rowBetween,
  ...itemsCenter
}

export const centerAround = {
  ...rowAround,
  ...itemsCenter
}

export const centerEvenly = {
  ...rowEvenly,
  ...itemsCenter
}

export const centerCenter = {
  ...justifyCenter,
  ...itemsCenter
}

/**
 * Theme based
 */

export function generateBorderRaius(top, right, bottom, left) {
  let borderRadius = {}
  if (top) {
    borderRadius.borderTopLeftRadius = top
  }
  if (right) {
    borderRadius.borderTopRightRadius = right
  }
  if (bottom) {
    borderRadius.borderBottomRightRadius = bottom
  }
  if (left) {
    borderRadius.borderBottomLeftRadius = left
  }
  return borderRadius
}
const { radius, radiusLg, radiusMd, font1, font2, font3, font4, font5, font6 } = SIZES;
const { primary, white, light, grey, darkGreen, lightDarkGreen, black, greyGreen } = COLORS;

export const borderRadius = ({
  top = radius,
  right = radius,
  bottom = radius,
  left = radius
} = {}) => {
  return generateBorderRaius(top, right, bottom, left)
}

export const borderRadiusLg = ({
  top = radiusLg,
  right = radiusLg,
  bottom = radiusLg,
  left = radiusLg
} = {}) => {
  return generateBorderRaius(top, right, bottom, left)
}

export const borderRadiusMd = ({
  top = radiusMd,
  right = radiusMd,
  bottom = radiusMd,
  left = radiusMd
} = {}) => {
  return generateBorderRaius(top, right, bottom, left)
}

export function bg(color) {
  return {
    backgroundColor: color
  }
}
export const bgPrimary = bg(primary);
export const bgWhite = bg(white);
export const bgLight = bg(light);
export const bgGrey = bg(grey);
export const bgLightDarkGreen = bg(lightDarkGreen);
export const bgDarkGreen = bg(darkGreen);
export const bgGreyGreen = bg(greyGreen);

export function textColor(color) {
  return {
    color,
  }
}
export const textPrimary = textColor(primary);
export const textWhite = textColor(white);
export const textDarkGreen = textColor(darkGreen);
export const textLight = textColor(light);
export const textGrey = textColor(grey);
export const textLightDarkGreen = textColor(lightDarkGreen);
export const textBlack = textColor(black);


export const borderColor = (color) => {
  return {
    borderColor: color,
    borderStyle: 'solid',
    borderWidth: 1
  }
}
export const borderPrimary = borderColor(primary);
export const borderWhite = borderColor(white);
export const borderDarkGreen = borderColor(darkGreen);
export const borderLight = borderColor(light);
export const borderGrey = borderColor(grey);
export const borderLightDarkGreen = borderColor(lightDarkGreen);
export const borderBlack = textColor(black);

export const fontSize = (size) => {
  return {
    fontSize: size
  }
};

export const fontSize1 = fontSize(font1);
export const fontSize2 = fontSize(font2);
export const fontSize3 = fontSize(font3);
export const fontSize4 = fontSize(font4);
export const fontSize5 = fontSize(font5);
export const fontSize6 = fontSize(font6);