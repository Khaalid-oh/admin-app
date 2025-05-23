export const formatLabel = (key: string): string => {
  // Convert camelCase to separate words and capitalize first letter
  const words = key
    // Insert a space before capital letters
    .replace(/([A-Z])/g, " $1")
    // Split the string by spaces
    .split(/(?=[A-Z])|[\s_-]+/)
    // Capitalize first letter of each word and join with spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .trim();

  return words;
};
