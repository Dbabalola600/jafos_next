

type TextInputFieldsProps = {
    id?: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    value?: string;
    errorMessage?: string;
    name: string;
  maxLength?:any;
       onChange?: React.ChangeEventHandler<HTMLInputElement>;
}


function TextInputFields(props: TextInputFieldsProps) {
    return (
        <div className="w-full relative">
            <input
                id={props.id}
            
                maxLength={props.maxLength}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-white rounded-lg border-2 border-gray-600 appearance-none dark:text-white   focus:outline-none focus:ring-0  peer"
            />
            <label className="absolute w-fit text-md text-gray-900 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                {props.name}
            </label>
            <p className="text-xs text-red-900  ">{props.errorMessage}</p>

        </div>
    )
}

export default TextInputFields;