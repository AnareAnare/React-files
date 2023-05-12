import React from 'react';
import { useUserData } from '../../hooks/useUserData';
import styles from './commentform.css';
import { FormikErrors, Formik } from 'formik';

export function CommentForm() {
  const { data } = useUserData();

  return (
    <Formik
      initialValues={{ comment: '' }}
      validate={values => {
        const errors: FormikErrors<{ comment: string }> = {};
        if (values.comment.length <= 3) {
          errors.comment = 'Введите больше 3-х символов';
        }
        return errors;
      }}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { validateForm, setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert('Форма отправлена');
          validateForm(values);
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.placeholderBox}>
            <textarea id='comment' name='comment' className={styles.input} value={values.comment} onChange={handleChange} />
            {!values.comment ? <div className={styles.placeholderText}><span className={styles.color}>{data.name}</span>, оставьте ваш комментарий</div> : ''}
          </label>
          {errors.comment ? (<div className={styles.error}>{errors.comment}</div>) : null}
          <button className={styles.button} type="submit" disabled={isSubmitting}>Комментировать</button>
        </form>
      )}
    </Formik>
  );
}
