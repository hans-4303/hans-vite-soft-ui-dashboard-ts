export type CommonProps = {
  [key: string]:
    | StringConstructor
    | NumberConstructor
    | BooleanConstructor
    | FunctionConstructor
    | {
        type:
          | StringConstructor
          | NumberConstructor
          | BooleanConstructor
          | FunctionConstructor
          | null
          | undefined;
        default?: string | number | boolean | Function | null | undefined;
        required?: boolean;
      };
};
