function isAnagram(string1, string2) {
    // a function to clean out and sort the words
  const rearrangeString = function(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("");
  };

  return rearrangeString(string1) == rearrangeString(string2);
}

module.exports = isAnagram
