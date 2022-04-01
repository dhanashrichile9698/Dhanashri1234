systemutil.Run("C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("UserName", dtGlobalSheet) @@ hightlight id_;_2038668352_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure DataTable("Password",dtGlobalSheet) @@ hightlight id_;_2038670416_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1904287272_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "San Francisco" @@ hightlight id_;_1904964392_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Sydney" @@ hightlight id_;_1904964200_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "6" @@ hightlight id_;_1904289192_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1904958008_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_2044381344_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2038673920_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Dhanashri" @@ hightlight id_;_2044380960_;_script infofile_;_ZIP::ssf22.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_1443918_;_script infofile_;_ZIP::ssf5.xml_;_
