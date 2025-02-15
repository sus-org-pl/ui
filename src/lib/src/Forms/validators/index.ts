export class Validators {
  static email(input: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  }

  static name(input: string): boolean {
    const nameRegex =
      /^[A-Za-zŁŚĆŻŹŃÓĘĄłśćżźńóęą]+(?:[-\s][A-Za-zŁŚĆŻŹŃÓĘĄłśćżźńóęą]+)*$/;
    return nameRegex.test(input);
  }

  static phone(input: string): boolean {
    const phoneRegex =
      /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(input);
  }

  static required(input: string | boolean): boolean {
    return Boolean(input);
  }
}
