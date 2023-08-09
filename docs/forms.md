# Forms

## Overview

This project uses [react-hook-form](https://github.com/react-hook-form) (for form boilerplate) + [zod](https://github.com/react-hook-form/resolvers#zod) (as a resolver).

## Creating a Form

1. Define the `schema` using `zod`

```typescript
const schema = z.object({
  phone: z
    .string()
    .min(10, "Must be at least 10 digits")
    .max(11, "Cannot be more than 11 digits"),
});
```

2. Derive a type from the schema

```typescript
type Schema = z.infer<typeof schema>;
```

3. Define the form's input field configurations

```typescript
const fieldConfigurations: FormProps<Schema>["fieldConfigurations"] = {
  phone: {
    name: "phone",
    placeholder: "xxx-xxx-xxxx",
    keyboardType: "phone-pad",
    returnKeyType: "go",
    autoComplete: "tel",
    textContentType: "telephoneNumber",
  },
};
```

4. Use the `useForm` hook from `react-hook-form`, passing in `Schema` from `Step 2`, to obtain `methods` for the form.

5. Pass `methods` into the `methods` prop of the [Form](../src/components/organisms/forms/Form/Form.tsx) component, and (optionally) use `methods` to customize the behavior of the form.

## Notes

Forms are often more than just input fields. At the time of writing, the `Form` component supports only standard text input components; however, it will be straightforward to iterate on this, as needed, moving forward.
