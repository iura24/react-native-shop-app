import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthScreen, { authScreenOptions } from "../../screens/user/AuthScreen";

const AuthStackNavigator = createStackNavigator();

export default AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={authScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};
