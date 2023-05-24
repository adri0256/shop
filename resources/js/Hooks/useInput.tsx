import TextInput from "@/Components/TextInput";
import { useState } from "react";

export function useInput(props: any) {
    const [value, setValue] = useState("");
    const input = <TextInput {...props} value={value} onChange={e => setValue(e.target.value)} />;
    return [input, value];
}