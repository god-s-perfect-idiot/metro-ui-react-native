# Action Core Components

This is the most basic components that are used in the app. These components are usually used to build more complex components. Action components are usually used to perform some action or to display some information with the scope of interactivity in mind.

## Button 

Usage: This component is used to display a button with a text.

### Params

- text: The text to be displayed on the button.
- onPress: The function to be called when the button is pressed.
- disabled: The state of the button. Default is false.
- classOverride?: The class to be applied to the button. Default is empty.
- isLowerCase?: The state of the text to be displayed in lowercase. Default is true.

### Examples

Button with text "Click Me"

```jsx
        <Button text="Click Me" onPress={() => console.log("clicked")} />
```

Button with text "Click Me" and disabled

```jsx
        <Button text="Click Me" onPress={() => console.log("clicked")} disabled />
```

## Link 

Usage: This component is used to display a link with a text.

### Params

- text: The text to be displayed on the link.
- onPress: The function to be called when the link is pressed.
- classOverride?: The class to be applied to the link. Default is empty.
- isLowerCase?: The state of the text to be displayed in lowercase. Default is true.
- disabled: The state of the link. Default is false.

### Examples

Link with text "Click Me"

```jsx
        <Link text="Click Me" onPress={() => console.log("clicked")} />
```

Link with text "Click Me" and disabled

```jsx
        <Link text="Click Me" onPress={() => console.log("clicked")} disabled />
```

## MenuBar 

Usage: This component is used to display a menu bar with a list of items. The menubar has two states, expanded and collapsed.

There are two versions of the menubar, one with a, icon description and the other with a list. We call these as QuickMenu and MenuBar respectively.

### QuickMenu Params

- options: A list of Objects of the following type:

```typescript
    {
        text: string,
        onPress: () => void,
        Icon: ReactNode,
    }
```

### MenuBar Params

- options: A React Node to be displayed as the menu for the expanded menu.
- controls: A React Node to be displayed as the controls for the collapsed menu.

### Examples

QuickMenu with two options

```jsx
        <QuickMenu options={[
            {
                text: "done",
                onPress: () => console.log("done"),
                Icon: <Check width={20} stroke={"white"} strokeWidth={3} />,
            },
            {
                text: "cancel",
                onPress: () => console.log("cancel"),
                Icon: <X width={20} stroke={"white"} strokeWidth={3} />,
            },
        ]} />
```

MenuBar with two options

```jsx
        <MenuBar options={
            <View>
                <Text>Menu Content</Text>
            </View>
        } controls={
            <View>
                <Text>Controls Content</Text>
            </View>
        } />
```

## RoundedButton

Usage: This component is used to display a rounded button with a text.

### Params

- classOverrides?: The class to be applied to the button. Default is empty.
- Icon: The icon to be displayed on the button.

### Examples

RoundedButton with icon

```jsx
        <RoundedButton Icon={<Check width={20} stroke={"white"} strokeWidth={3} />} />
```

RoundedButton with icon and classOverrides

```jsx
        <RoundedButton Icon={<Check width={20} stroke={"white"} strokeWidth={3} />} classOverrides="bg-blue-500" />
```

## Select 

Usage: This component is used to display a select with a list of items. 

### Params

- options: A list of Objects of the following type:

```typescript
    {
        name: string,
        value: string,
    }
```

- onChange: The function to be called when the select value is changed.
- title: The title to be displayed on the select.
- classOverride?: The class to be applied to the select. Default is empty.

### Examples

Select with two options

```jsx
        <Select options={[
            {
                name: "Option 1",
                value: "option1",
            },
            {
                name: "Option 2",
                value: "option2",
            },
        ]} onChange={(value) => console.log(value)} title="Select an option" />
```

## TextBox

Usage: This component is used to display a text box with a label.

### Params

- defaultValue: The default value of the text box.
- onChangeText: The function to be called when the text box value is changed.
- onSubmitText: The function to be called when the text box value is submitted, ie, changes have stopped.
- classOverride?: The class to be applied to the text box. Default is empty.
- title: The title to be displayed on the text box.
- placeholder: The placeholder to be displayed on the text box.

### Examples

TextBox with title "Enter your name"

```jsx
        <TextBox defaultValue="John Doe" onChangeText={(value) => console.log(value)} onSubmitText={(value) => console.log(value)} title="Enter your name" placeholder="John Doe" />
```

## Switch

Usage: This component is used to display a switch with a label.

### Params

- defaultValue: The default value of the switch.
- onChange: The function to be called when the switch value is changed.
- title: The title to be displayed on the switch.
- description?: The description to be displayed on the switch.

### Examples

Switch with title "Enable Notifications"

```jsx
        <Switch defaultValue={true} onChange={(value) => console.log(value)} title="Enable Notifications" />
```

Switch with title "Enable Notifications" and description "This will enable notifications"

```jsx
        <Switch defaultValue={true} onChange={(value) => console.log(value)} title="Enable Notifications" description="This will enable notifications" />
```
