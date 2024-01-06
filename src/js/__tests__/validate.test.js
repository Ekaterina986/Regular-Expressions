import Validator from "../validate";

test('valid name', () => {
    const val = new Validator();
    const result = val.validateUsername('1eeee');
    const result1 = val.validateUsername('ttt');
    const result2 = val.validateUsername('***');

    const result3 = val.validateUsername('1eeee');
    const result4 = val.validateUsername('eee1');
    const result5 = val.validateUsername('_eee');
    const result6 =val.validateUsername('eee-');
    const result7 = val.validateUsername('e22222e');
    const result8 = val.validateUsername('e222e');

    expect(result).toBeFalsy();
    expect(result1).toBeTruthy();
    expect(result2).toBeFalsy();
    expect(result3).toBeFalsy();
    expect(result4).toBeFalsy();
    expect(result5).toBeFalsy();
    expect(result6).toBeFalsy();
    expect(result7).toBeFalsy();
    expect(result8).toBeTruthy();
});
