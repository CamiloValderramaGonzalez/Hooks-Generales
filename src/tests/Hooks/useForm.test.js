import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Camilo',
        email: 'a@a.com'
    };

    test('Debe regresar un form por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [formValues, handleInputChange, reset] = result.current;
        expect(formValues.name).toBe('Camilo');
        expect(formValues.email).toBe('a@a.com');
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe cambiar el valor "name" del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'modificado'
                }
            });
        })
        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'modificado' });
    });

    test('Debe resetear el form', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'modificado'
                }
            });
            reset();
        })
        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    })

})