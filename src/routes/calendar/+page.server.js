export const actions = {
    default: async ({request}) => {
        let formData = await request.formData();

        return {
            data: {
                submitMonth: formData.get("month"),
                submitYear: formData.get("year")
            }
        }
    }
}