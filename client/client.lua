-- client.lua
local DEBUG_MODE = true


function sendNotification(type, message, icon)
   
    SendNUIMessage({
        colorsent = type,   
        textsent = message,  
        fadesent = 5000,     
        icon = icon          
    })
end


if DEBUG_MODE then
    Citizen.CreateThread(function()
        Citizen.Wait(1000)
        sendNotification('success', 'This is a success message!')
        Citizen.Wait(1000)
        sendNotification('error', 'Something went wrong!')
        Citizen.Wait(1000)
        sendNotification('warning', 'Check your input!')
        Citizen.Wait(1000)
        sendNotification('info', 'Server info message!')
    end)
end


RegisterNUICallback('exampleCallback', function(data, cb)
    print('Received data from NUI:', data)

    
    if data.action == 'test' then
        print('Test action received from NUI!')
    end

  
    cb({ response = 'Response from client' })
end)


RegisterCommand('notifyTest', function()
    sendNotification('info', 'You triggered a notification with a command!', '/svgs/info.svg')
end, false)