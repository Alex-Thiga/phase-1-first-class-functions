function receivesAFunction (liftWeight)
{
    liftWeight()
}
function returnsANamedFunction ()
{  
    return function liftWeight(){
        console.log('my name is Alex')
    }
}