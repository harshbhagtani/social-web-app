export function getformbody(params) {
  let formbody = [];

  for (let property in params) {
    let encodedproperty = encodeURIComponent(property);
    let encodedvalue = encodeURIComponent(params[property]);

    formbody.push(encodedproperty + '=' + encodedvalue);
  }

  return formbody.join('&');
}
