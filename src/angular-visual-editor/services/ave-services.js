angular.module('angularVisualEditor.services', [])
.factory('Utils', function () {
  var service = {
    isUndefinedOrNull: function (obj) {
      return !angular.isDefined(obj) || obj === null;
    },
    findInArrayByField: function (arrayObj, field, value) {
      for (var i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i][field] == value) {
          return (arrayObj[i]);
        }
      }
      return false;
    },
    replaceNewLineWithBrTag: function (text) {
      if (!this.isUndefinedOrNull(text)) {
        var result = text.replace(/\n/g, '<br/>');
        return result;
      } else {
        return null;
      }
    },
    getInitialLetter: function (name) {
      var initial = '';
      if (!this.isUndefinedOrNull(name) && name.length > 0) {
        initial += name.charAt(0).toUpperCase();
      }
      return initial;
    },
    getInitialLetters: function (user) {
      var initials = '';
      if (!this.isUndefinedOrNull(user.forename) && user.forename.length > 0) {
        initials += user.forename.charAt(0).toUpperCase();
      }
      if (!this.isUndefinedOrNull(user.surname) && user.surname.length > 0) {
        initials += user.surname.charAt(0).toUpperCase();
      }
      return initials;
    },
    getInitialLettersForItem: function (item) {
      var initials = '';
      if (!this.isUndefinedOrNull(item.displayName) && item.displayName.length > 0) {
        initials += item.displayName.charAt(0).toUpperCase();
      }
      return initials;
    },
    getTagsAsCommaSeparatedString: function (myArray) {
      var result = null;
      if (myArray) {
        result = '';
        for (var i = 0; i < myArray.length; i++) {
          var curTag = myArray[i].name;
          if (curTag && curTag != '') {
            result = result + ', ' + curTag;
          }
        }

        if (result.length > 0) {
          result = result.replace(', ', '');
        }
      }
      return result;
    }
  };
  return service;
})
;
