// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// ues a regular expression to match the tag name of any elements
// we dont need to be concerned about
var tags = /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i;

// a function that usees reg exp to convert self closing tags to "normal" form
function convert(html) {
  return html.replace(/(<(\w+)[^>]*?)\/>/g, function(all, front, tag) {
    return tags.test(tag) ?
      all :
      front + "></" + tag + ">";
  });
}

function getNodes(htmlString, doc) {
  // map of element types that need special parent containers. each entry
  // has the depth of the new node, opening HTML for the parents
  // and closing HTML for the parents.
  var map = {
    "<td": [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    "<th": [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    "<tr": [2, "<table><thead>", "</thead></table>"],
    "<option": [1, "<select mutliple='multiple'>","</select>"],
    "<optgroup": [1, "<select mutliple='multiple'>", "</select>"],
    "<legend": [1, "<fieldset>","</fieldset>"],
    "<thead": [1, "<table>","</table>"],
    "<tbody": [1, "<table>","</table>"],
    "<tfoot": [1, "<table>","</table>"],
    "<colgroup": [1, "<table>", "</table>"],
    "<caption": [1, "<table>", "</table>"],
    "<col": [2, "<table><tbody></tbody><colgroup>","</colgroup></table>"],
    "<link": [3, "<div></div><div>", "</div>"]
  };

  // uses a regular expression to match the opening bracket and tag name
  // of the element to be inserted
  var tagName = htmlString.match(/<\w+/),
      // if its in the map, grab the entry. otherwise, construct a faux
      // entry with the empty parent markup and a depth of zero
      mapEntry = tagName ? map[tagName[0]] : null;
          if (!mapEntry) mapEntry = [0];

  // create a div eleent in which to create the new nodes. note that we
  // use a passed document if it exists, or default to the current
  // document if not.
  var div = (doc || document).createElement("div");
  // wrap the incoming markup with the parents from the map entry
  // and inject it as the innerHTML of the newly created div
  div.innerHTML = mapEntry[1] + htmlString + mapEntry[2];

  // walk down the just created tree to the depth indicated by the map
  // entry. this hsould be the parent of the desired node created
  // from the markup.
  while (mapEntry[0]--) div = div.lastChild;
  // return the newly created element
  return div.childNodes;
}

assert(getNodes("<td>test</td><td>test2</td>").length === 2,
      "Get two nodes back from the method");
assert(getNodes("<td>test</td>")[0].nodeName === "TD",
      "Verify that we're getting the ride node.");
