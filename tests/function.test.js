import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";

describe("car card test", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });

  it("should contain a title with Mercedes Benz c300 2022", () => {
    const cardTitle = "Mercedes Benz c300 2022"

    expect(document.getElementById("product-title").innerHTML).toBe(
      cardTitle 
    );
  });
  it("should contain a button to add a product to cart", () => {
    expect (document.getElementById("button")).toBeInTheDocument()
  })

  it("should contain a span to change car colour", () => {
    expect (document.getElementsByClassName (""))
  })
});


