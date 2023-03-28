const getElementsByTag = (root, tagName) => {
  if (!root) return [];
  if (!tagName) return [root];

  let result = [];

  // if result is a tag we are lookning for
  if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
    result.push(root);
  }

  if (root.hasChildNodes()) {
    for (let child of root.children) {
      result = result.concat(getElementsByTag(child, tagName));
    }
  }

  return result;
};

module.exports = getElementsByTag;