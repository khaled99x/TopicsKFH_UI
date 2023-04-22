
export default function CustomRadioButton({name,title})
{
    return(
        <>
            <label class="control control--radio">
                {title}
                <input type="radio" name={name} />
                <div class="control__indicator"></div>
            </label>
        </>
    );
    
}