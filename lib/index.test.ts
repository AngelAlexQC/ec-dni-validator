import { expect, test } from "bun:test";
import { isValidDNI } from "./index";

const valids = ["0904939055", "0904939055001"];
const inValids = ["0904939056", "0904939055002"];

test("valids", () => {
  valids.forEach((dni) => {
    expect(isValidDNI(dni)).toBeTruthy();
  });
});

test("inValids", () => {
  inValids.forEach((dni) => {
    expect(isValidDNI(dni)).toBeFalsy();
  });
});
