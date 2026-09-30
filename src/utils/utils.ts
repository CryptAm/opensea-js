export * from "./address"
export * from "./chain"
// Re-export all utilities from specialized modules
export * from "./fees"
export * from "./protocol"
export * from "./units"

interface ErrorWithCode extends Error {
  code: string
}

export const hasErrorCode = (error: unknown): error is ErrorWithCode => {
  if (error === null || error === undefined) {
    return false
  }
  return !!(error as Partial<ErrorWithCode>).code
}
