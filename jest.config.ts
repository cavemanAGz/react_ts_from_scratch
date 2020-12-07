import type {Config} from "@jest/types"

const config: Config.InitialOptions = {
    verbose: true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    setupFilesAfterEnv: ["./setupEnzymeTests.ts"]
}
export default config
