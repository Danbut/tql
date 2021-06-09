const prepareToParse = (parseString: string) => {
    
    const stringWithSpacesNot = parseString.replace(/!/g, ' ! ');
    
    const stringWithSpacesLeftParentheses = stringWithSpacesNot.replace(/\(/g, ' ( ');
    
    const stringWithSpacesRightParentheses = stringWithSpacesLeftParentheses.replace(/\)/g, ' ) ');
    
    const lowercaseString = stringWithSpacesRightParentheses.toLowerCase();
    
    const stringWithoutExtraSpacing = lowercaseString.replace(/\s+/g, " ");
    
    if (stringWithoutExtraSpacing[0] === ' ') {
            const str1 = stringWithoutExtraSpacing.slice(1);
            if (str1[str1.length - 1] === ' ') {
                    const str2 = str1.slice(0, -1);
                    return str2.split(' ');
            }
            return str1.split(' ');
    } 
    return stringWithoutExtraSpacing.split(' ');
}

export default prepareToParse;