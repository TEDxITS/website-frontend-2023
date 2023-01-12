// including this for bypassing github action typecheck workflow

declare module '*.png' {
  const content: import('../dist/client/image').StaticImageData;

  export default content;
}

declare module '*.svg' {
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;

  export default content;
}

declare module '*.jpg' {
  const content: import('../dist/client/image').StaticImageData;

  export default content;
}

declare module '*.jpeg' {
  const content: import('../dist/client/image').StaticImageData;

  export default content;
}

declare module '*.gif' {
  const content: import('../dist/client/image').StaticImageData;

  export default content;
}

declare module '*.webp' {
  const content: import('../dist/client/image').StaticImageData;

  export default content;
}

declare module '*.avif' {
  const content: import('../dist/client/image').StaticImageData;

  export default content;
}

declare module '*.ico' {
  const content: import('../dist/client/image').StaticImageData;

  export default content;
}

declare module '*.bmp' {
  const content: import('../dist/client/image').StaticImageData;

  export default content;
}
