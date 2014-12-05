/**
 * Expressions_Personal - Created by jacobawillford on 12/4/14.
 */

var mostPluginsRoom = prompt("How many plugins does it take for your circuit breaker to trip one room?");
var currentPluginsRoom1 = prompt("How many devices do you have plugged into your outlets in room 1?");
var currentPluginsRoom2 = prompt("How many devices do you have plugged into your outlets in room 2?");
var currentPluginsRoom3 = prompt("How many devices do you have plugged into your outlets in room 3?");
var mostPlugins = prompt("How many plugins does it take for your circuit breaker to trip your entire house?");
var unplug = Number(currentPluginsRoom1) + Number(currentPluginsRoom2) + Number(currentPluginsRoom3) - mostPlugins;
var unplugRoom1 = mostPluginsRoom - currentPluginsRoom1;
var unplugRoom2 = mostPluginsRoom - currentPluginsRoom2;
var unplugRoom3 = mostPluginsRoom - currentPluginsRoom3;
alert("You should unplug " + unplug + " plugs in your house in order to prevent your circuit breaker from tripping your entire house." + "\nYou should unplug " + unplugRoom1 + " plugs in Room 1 in order to prevent your circuit breaker from tripping Room 1." + "\nYou should unplug " + unplugRoom2 + " plugs in Room 2 in order to prevent your circuit breaker from tripping Room 2." + "\nYou should unplug " + unplugRoom3 + " plugs in Room 3 in order to prevent your circuit breaker from tripping Room 3.");
