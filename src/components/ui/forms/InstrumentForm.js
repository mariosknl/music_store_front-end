// import React from 'react';
// import { useFormik } from 'formik';

// const InstrumentForm = props => {
//   const { fields, type, labels } = props.input;
//   const { saveProps } = props;
//   const initVals = {};
//   fields.forEach(field => (initVals[field] = ''));
//   const formik = useFormik({
//     initialValues: {
//       ...initVals,
//     },
//     onSubmit: (values, { resetForm }) => {
//       saveProps(values);
//       resetForm({ values: '' });
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       {fields.map((field, id) => (
//         <Input
//           type={type[id]}
//           key={id}
//           id={field}
//           onChange={formik.handleChange}
//           labelContent={labels[id]}
//           placeholder={field}
//         />
//       ))}
//     </form>
//   );
// };

// export default InstrumentForm;
