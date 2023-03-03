import * as yup from "yup";

export const registerVehicleSchema = yup.object({
  title: yup.string().required("Campo Obrigatório"),
  image: yup
    .string()
    .test("isValid", "Deve ser uma url válida", function (value) {
      const urlRegEx =
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
      const isUrl = urlRegEx.test(value);
      if (isUrl || value === "") {
        return true;
      } else {
        return false;
      }
    }),
  brand: yup.string().required("Campo Obrigatório"),
  model: yup.string().required("Campo Obrigatório"),
  plates: yup.string().required("Campo Obrigatório"),
  year: yup.number().required("Campo Obrigatório"),
  condition: yup.string().required("Campo Obrigatório"),
});
