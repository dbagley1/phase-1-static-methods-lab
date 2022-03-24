class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9'\- ]/g, "");
  }
  static titleize(string) {
    const excludeList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string
      .split(" ")
      .map((word, index) => {
        if (index === 0 || !excludeList.includes(word.toLowerCase())) {
          return Formatter.capitalize(word);
        } else {
          return word;
        }
      })
      .join(" ");
  }
}