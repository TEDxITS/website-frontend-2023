export default function createResponse<
  T extends Record<string, unknown> | Record<string, unknown>[] | [] | null
>(status: number, message: string, data: T) {
  return {
    status: status,
    message: message,
    data: data,
  };
}
