function receivesAFunction (liftWeight)
{
    liftWeight()
}
function returnsANamedFunction ()
{  
    return function liftWeight(){
        console.log('my name is Alex')
    }
} function returnsAnAnonymousFunction ()
{
    return  () => console.log('my name is alex')}