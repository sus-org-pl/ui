export const AutocompleteMaximumVisibleOptionsCount = [1, 2, 3, 4, 5] as const;
export const AutocompleteOptionsTypogprahyType = ["body1", "body2"] as const;

export type AutocompleteOptions =
  | AutocompleteCallbackOption[]
  | AutocompleteFormOption[];

export type AutocompleteOptionsGeneratorFn = (
  value: string
) => (AutocompleteOptions | Promise<AutocompleteOptions>);
export type AutocompleteMaximumVisibleOptionsCount =
  (typeof AutocompleteMaximumVisibleOptionsCount)[number];
export type AutocompleteOptionsTypogprahyType =
  (typeof AutocompleteOptionsTypogprahyType)[number];

interface AutocompleteCallbackOption {
  label: string;
  value?: never;
  action: () => void;
}

interface AutocompleteFormOption {
  label: string;
  value: string;
  action?: never;
}
