
export default function CustomCheckbox({title})
{
    return(
        <>
            <label class="control control--checkbox">
                <input type="checkbox" value={title}/>
                <div class="control__indicator"></div>
                {title}               
            </label>
        </>
    );
    
}