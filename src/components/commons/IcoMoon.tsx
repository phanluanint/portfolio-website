import React, { createElement } from 'react'
import iconSet from '../../../selection.json'

const defaultStyle = {
  display: 'inline-block',
  stroke: 'currentColor',
  fill: 'currentColor',
  width: '100%',
  height: '100%',
}

interface IconProps {
  icon: string
  size?: string
  color?: string
  disableFill?: string
  removeInlineStyle?: string
}

const IcoMoon: React.FC<IconProps> = ({ color = '#FFF', icon, size = '100%', disableFill, removeInlineStyle }) => {
  if (!iconSet || !icon) {
    console.warn('The "iconSet" and "icon" props are required.')
    return null
  }

  const currentIcon = iconSet.icons.find(item => item.properties.name === icon)

  if (!currentIcon) {
    console.warn(`"${icon}" icon not found.`)
    return null
  }

  const style = defaultStyle
  if (size) {
    style.width = size
    style.height = size
  }

  if (color) {
    style.fill = color
  }

  const viewBox = `0 0 1024 1024`

  const paths = currentIcon.icon.paths.map((path, index) =>
    createElement('path', {
      d: path,
      key: icon + index,
      ...(!disableFill ? currentIcon.icon.attrs[index] : {}),
    }),
  )

  return createElement('svg', { viewBox, style }, paths)
}

export default IcoMoon
