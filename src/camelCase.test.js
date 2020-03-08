import camelCase from './camelCase';

describe('when using remove', () => {
  it('should work with numbers', () => {
    expect(camelCase('12 feet')).toBe('12Feet');
    expect(camelCase('enable 6h format')).toBe('enable6hFormat');
    expect(camelCase('enable 24H format')).toBe('enable24hFormat');
    expect(camelCase('too legit 2 quit')).toBe('tooLegit2Quit');
    expect(camelCase('walk 500 miles')).toBe('walk500Miles');
    expect(camelCase('xhr2 request')).toBe('xhr2Request');
  });

  it('should work with normal words', () => {
    expect(camelCase('safe HTML')).toBe('safeHtml');
    expect(camelCase('escape HTML entities')).toBe('escapeHtmlEntities');
    expect(camelCase('XML Http Request')).toBe('xmlHttpRequest');
  });

  it('should work with punctuations', () => {
    expect(camelCase('safe+HTML')).toBe('safeHtml');
    expect(camelCase('escape-HTML*entities')).toBe('escapeHtmlEntities');
    expect(camelCase('XML$Http$Request')).toBe('xmlHttpRequest');
  });

  it('should return directly if the string is null or undefined', () => {
    expect(camelCase()).toBeUndefined();
    expect(camelCase(undefined)).toBeUndefined();
    expect(camelCase(null)).toBe(null);
  });
});
