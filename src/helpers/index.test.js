import { getLetterMatchCount } from "./";

describe("getLetterCount", () => {
  const secretWord = "party";

  test("returns correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test("returns corect count when there are three matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test("returns corect count when there are duplicate letters in the guess", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
