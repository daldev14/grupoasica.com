import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  email: '',
  telefono: '',
  empresa: '',
  servicio: '',
  mensaje: '',
};

const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'El campo es requerido';
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.name = ' El nombre solo puede contener letras y espacios';
  }

  if (!values.email) {
    errors.email = 'El campo es requerido';
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
  ) {
    errors.email = 'El email no es válido';
  }

  if (!values.telefono) errors.telefono = 'El campo es requerido';
  if (!values.empresa) errors.empresa = 'El campo es requerido';
  if (!values.servicio) errors.servicio = 'El campo es requerido';
  if (!values.mensaje) errors.mensaje = 'El campo es requerido';
  return errors;
};

export default function FormServicios() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert('Formulario enviado con éxito');
            resetForm();
            resolve(true);
          }, 3000);
          clearTimeout(3000);
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-10 gap-6">
          {/* input - nombre contacto */}
          <div className="col-span-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de contacto
              <span className="text-red-600">*</span>
            </label>

            <Field
              type="text"
              id="name"
              name="name"
              className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
            />
            <ErrorMessage
              name="name"
              component="small"
              className="text-red-600"
            />
          </div>

          {/* input - correo */}
          <div className="col-span-full  sm:col-span-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
              <span className="text-red-600">*</span>
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
            />
            <ErrorMessage
              name="email"
              component="small"
              className="text-red-600"
            />
          </div>

          {/* input - telefono */}
          <div className="col-span-full sm:col-span-5">
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono/Celular
              <span className="text-red-600">*</span>
            </label>
            <Field
              type="text"
              id="telefono"
              name="telefono"
              className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
            />
            <ErrorMessage
              name="telefono"
              component="small"
              className="text-red-600"
            />
          </div>

          {/* input - nombre empresa/institución */}
          <div className="col-span-full">
            <label
              htmlFor="empresa"
              className="block text-sm font-medium text-gray-700"
            >
              Empresa/Institución
              <span className="text-red-600">*</span>
            </label>
            <Field
              type="text"
              id="empresa"
              name="empresa"
              className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
            />
            <ErrorMessage
              name="empresa"
              component="small"
              className="text-red-600"
            />
          </div>

          {/* input - servicio */}
          <div className="col-span-full">
            <label
              htmlFor="servicio"
              className="block text-sm font-medium text-gray-700"
            >
              Tipo de servicio
              <span className="text-red-600">*</span>
            </label>
            <Field
              as="select"
              id="servicio"
              name="servicio"
              className="form-select mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
            >
              <option
                hidden
                label="Seleccione el tipo de servicio que desea..."
              ></option>
              <option value="banca">Banca y Finanzas</option>
              <option value="corporación">Empresa/Corporación </option>
              <option value="gobierno">Gobierno</option>
              <option value="pymes">Pymes</option>
              <option value="salud">Salud</option>
              <option value="personalizado">Personalizado</option>
            </Field>
            <ErrorMessage
              name="servicio"
              component="small"
              className="text-red-600"
            />
          </div>

          {/* input - mensaje */}
          <div className="col-span-10">
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
              <span className="text-red-600">*</span>
            </label>
            <Field
              as="textarea"
              id="mensaje"
              name="mensaje"
              cols={30}
              rows={10}
              className="form-textarea mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
            />
            <ErrorMessage
              name="mensaje"
              component="small"
              className="text-red-600"
            />
          </div>

          {/* button */}
          <div className="col-span-full sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-flex justify-center items-center gap-1 shrink-0 rounded-md border border-blue-600 bg-blue-600 px-9 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l9.6 3.84l3.84 9.6a1 1 0 0 0 .9.63a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05ZM19 24.2l-2.79-7L21 12.41L19.59 11l-4.83 4.83L7.8 13l17.53-6.33Z"
                />
              </svg>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
