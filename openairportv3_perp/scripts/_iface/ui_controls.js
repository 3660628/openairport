
function showValue(newValue) {
	// We update both to send the scale value with the proper form cause Browsers suck
	
	document.getElementById("mapscale_disp").innerHTML=newValue;
	document.getElementById("map_scale_txt").value=newValue;
	
}


function setMainMenuItem(MainControl)
	{
	document.getElementById("MainMenuID").value = MainControl;
	}
	
function setSubMenuItem(SubControl)
	{
	document.getElementById("SubMenuID").value = SubControl;
	
	var MainID_tmp = document.getElementById("MainMenuID").value;
	var SubID_tmp = document.getElementById("SubMenuID").value;
	
	call_server_getmaplayercontrols(MainID_tmp,SubID_tmp);
	}	

<!--
var state = 'none';

function showhide(layer_ref) {

if (state == 'block') { 
state = 'none'; 
} 
else { 
state = 'block'; 
} 
if (document.all) { //IS IE 4 or 5 (or 6 beta) 
eval( "document.all." + layer_ref + ".style.display = state"); 
} 
if (document.layers) { //IS NETSCAPE 4 or below 
document.layers[layer_ref].display = state; 
} 
if (document.getElementById &&!document.all) { 
hza = document.getElementById(layer_ref); 
hza.style.display = state; 
} 
} 
//--> 

function toggle(DivName) {
	var ele = document.getElementById(DivName);
	//var text = document.getElementById(DivName);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "show";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "hide";
	}
} 

function updatemap(IslandID) {
//loadintoIframe('layouttableiframecontent', '_suc_usersettings.php')
// _iframe_getisland

// The idea here is to collect information from the form and display the proper layers

	if(document.MapControlForm2.ISLANDLAYORS_BaseMap.checked == true) {
			var $display_base_map = 1;
		}
		else {
			var $display_base_map = 0;
		}
		
	if(document.MapControlForm2.ISLANDLAYORS_Buildings.checked == true) {
			var $display_buildings = 1;
		}
		else {
			var $display_buildings = 0;
		}
	if(document.MapControlForm2.ISLANDLAYORS_GridOverlay.checked == true) {
			var $display_GridOverlay = 1;
		}
		else {
			var $display_GridOverlay = 0;
		}		
	if(document.MapControlForm2.ISLANDLAYORS_PassableLightBot.checked == true) {
			var $display_plb = 1;
		}
		else {
			var $display_plb = 0;
		}

var url = "_iframe_getisland.php?islandid=" + escape(IslandID) + "&ISLANDLAYORS_BaseMap=" + escape($display_base_map) + "&ISLANDLAYORS_Buildings=" + escape($display_buildings) + "&ISLANDLAYORS_GridOverlay=" + escape($display_GridOverlay) + "&ISLANDLAYORS_PassableLightBot=" + escape($display_plb);
alert(url);

loadintoIframe('layouttableiframecontent', url);
}

function updatemap2(IslandID) {

document.getElementById("islandid_js").value = document.getElementById("islandid").value;

alert(document.getElementById("islandid").value);
document.MapControlForm2.submit();

}

var unflood = function() {

	document.getElementById("flood_lm").style.display='none';
	document.getElementById("flood_sn").style.display='none';
	document.getElementById("flood_wp").style.display='none';
	document.getElementById("flood_gs").style.display='none';
	document.getElementById("flood_gs_show").style.display='none';	
	document.getElementById("flood_sh").style.display='none';	
	document.getElementById("flood_sh_show").style.display='none';	
}

function togglebutton_M(ButtonName,ButtonStatus) {
	// Takes the given variables and colors a button accordingly
	// Each button has four parts:
	//		Outer SPace
	//		Icon
	//		Inner Space
	//		Name
	
	// ButtonName will be a portion of the name of the button, the applicable four used names are:
	
	var OSpaceName = 'OSpace_MM' + escape(ButtonName);
	var ISpaceName = 'ISpace_MM' + escape(ButtonName);
	var IconName = 'Icon_MM' + escape(ButtonName);
	var NameName = 'Name_MM' + escape(ButtonName);

	if(ButtonStatus == 'off') {
			// Turn the button off
			document.getElementById(OSpaceName).className = 'item_space_inactive';
			document.getElementById(ISpaceName).className = 'item_space_inactive';
			document.getElementById(IconName).className = 'item_icon_inactive';
			document.getElementById(NameName).className = 'item_name_inactive';
		} else {
			// If Not OFF Turn the button ON
			document.getElementById(OSpaceName).className = 'item_space_active';
			document.getElementById(ISpaceName).className = 'item_space_active';
			document.getElementById(IconName).className = 'item_icon_active';
			document.getElementById(NameName).className = 'item_name_active';
		}

}

function togglebutton_M_F(ButtonName,ButtonStatus) {
	// Takes the given variables and colors a button accordingly
	// Each button has four parts:
	//		Outer SPace
	//		Icon
	//		Inner Space
	//		Name
	
	// ButtonName will be a portion of the name of the button, the applicable four used names are:
	
	var OSpaceName = 'OSpace_MM' + escape(ButtonName);
	var ISpaceName = 'ISpace_MM' + escape(ButtonName);
	var IconName = 'Icon_MM' + escape(ButtonName);
	var NameName = 'Name_MM' + escape(ButtonName);
	var FieldName = 'Field_MM' + escape(ButtonName);
	var FormatName = 'Format_MM' + escape(ButtonName);

	if(ButtonStatus == 'off') {
			// Turn the button off
			document.getElementById(OSpaceName).className = 'item_space_inactive_form';
			document.getElementById(ISpaceName).className = 'item_space_inactive_form';
			document.getElementById(IconName).className = 'item_icon_inactive_form';
			document.getElementById(NameName).className = 'item_name_inactive_form';
			document.getElementById(FieldName).className = 'item_field_inactive_form';
			document.getElementById(FormatName).className = 'item_format_inactive_form';			
		} else {
			// If Not OFF Turn the button ON
			document.getElementById(OSpaceName).className = 'item_space_active_form';
			document.getElementById(ISpaceName).className = 'item_space_active_form';
			document.getElementById(IconName).className = 'item_icon_active_form';
			document.getElementById(NameName).className = 'item_name_active_form';
			document.getElementById(FieldName).className = 'item_field_active_form';
			document.getElementById(FormatName).className = 'item_format_active_form';			
		}

}

// Establish Global Mouse Script Variables

		var gettotalvalue	= "";
		var gettotalvaluex 	= "";
		var gettotalvaluey 	= "";