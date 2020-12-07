import React from "react"
import {shallow} from "enzyme"
import HelloWorld from "../HelloWorld"
// import * as Enzyme from "enzyme"
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
//
// Enzyme.configure({adapter: new Adapter()})
describe("Testing the Hello World Component", () => {
    test("add 1 + 3 to equal 4", () => {
        expect(4).toBe(4)
    })
    it("Renders Hellos Word Component", () => {
        process.env.PRODUCTION = "TEST"
        process.env.NAME = "React From Scratch *** TEST ***"
        process.env.VERSION = "1.0.0"
        process.env.COMMIT_HASH = "c645248s525344"
        const helloWorld = shallow(<HelloWorld />)
        expect(helloWorld).toMatchSnapshot()
    })
})
