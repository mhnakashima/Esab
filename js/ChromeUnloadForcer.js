var isChromeUnloaded = false;

function onBeforeUnloadChrome(evt)
{
    setTimeout(function ()
    {
        onUnloadChrome();
    }, 0);

    onUnloadChrome();
}

function onUnloadChrome() {
    if (isChromeUnloaded)
    {
        return;
    }
    else
    {
        try
        {
            var bodyFunctions = document.body.onunload.toString().replace(/^([^\{])*|((\{|\}))*(\s)*/gi, "").split(";");
            for (var i = 0; i < bodyFunctions.length; i++)
            {
                try
                {
                    eval(bodyFunctions[i].replace(/\s/gi, ""));
                }
                catch (e) {}
            }

            var frameFunctions = document.getElementsByTagName("frameset")[0].onunload.toString().replace(/^([^\{])*|((\{|\}))*(\s)*/gi, "").split(";");
            for (var i = 0; i < frameFunctions.length; i++)
            {
                eval(frameFunctions[i].replace(/\s/gi, ""));
            }
        }
        catch (e) {}
    }
    
    isChromeUnloaded = true;
}

if (navigator.userAgent.toLowerCase().indexOf('chrome') != -1 && window.onbeforeunload == null)
{
    window.onbeforeunload = onBeforeUnloadChrome;
}