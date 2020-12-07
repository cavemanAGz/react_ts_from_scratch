import type {Config} from "@jest/types"

const config: Config.InitialOptions = {
    verbose: true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    snapshotSerializers: ["enzyme-to-json/serializer"]
}
export default config
