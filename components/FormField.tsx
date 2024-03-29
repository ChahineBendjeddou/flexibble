import { FC } from 'react'

interface FormFieldProps {
  type?: string
  title: string
  state: string
  placeholder: string
  isTextArea?: boolean
  setState: (value: string) => void
}

const FormField: FC<FormFieldProps> = ({
  title,
  state,
  placeholder,
  setState,
  isTextArea,
  type,
}) => {
  return (
    <div className="flex-col w-full gap-4 flexStart">
      <label className="w-full text-gray-100">{title}</label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type={type || 'text'}
          placeholder={placeholder}
          value={state}
          required
          className="truncate form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  )
}

export default FormField
