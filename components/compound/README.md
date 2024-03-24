# Compound Components

This is usually a combination of simple core components with custom styling applied on top of it. 

## PageView

Usage: This component is used to display a page and a menu stacked.

### Params

- page: The actual content of the page to be rendered.
- menu: The menu to be rendered on the right side of the page.
- mainTitle?: The top title of the page context.
- pageTitle?: The title of the page.

### Menu Params Breakdown

```typescript
    object: {
        expandedType: "description" | "list" | "custom",
        collapsedType: "no-icon" | "icon" | "custom",
        list?: [
            {
                text: string,
                onPress: () => void,
                Icon?: ReactNode,
            }
        ],
        customMenu?: ReactNode,
        customContent?: ReactNode,
    }
```

### Examples

Page with description menu and icon collapsed menu

```jsx
        <PageView page={
            <View>
                <Text>Page Content</Text>
            </View>
        } menu={
            expandedType: "description",
            collapsedType: "icon",
            list: [
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
            ],
        } />
```

Page with list menu and no-icon collapsed menu 

```jsx
        <PageView page={
            <View>
                <Text>Page Content</Text>
            </View>
        } menu={
            expandedType: "list",
            collapsedType: "no-icon",
            list: [
                {
                    text: "done",
                    onPress: () => console.log("done"),
                },
                {
                    text: "cancel",
                    onPress: () => console.log("cancel"),
                },
            ],
        } />
```

Page with custom menu and custom content

```jsx
        <PageView page={
            <View>
                <Text>Page Content</Text>
            </View>
        } menu={
            expandedType: "custom",
            collapsedType: "custom",
            customMenu: <CustomMenu />,
            customContent: <CustomContent />,
        } />
```

Page with list menu and custom content (eg: Browser)

```jsx
        <PageView page={
            <View>
                <Text>Page Content</Text>
            </View>
        } menu={
            expandedType: "list",
            collapsedType: "custom",
            list: [
                {
                    text: "done",
                    onPress: () => console.log("done"),
                },
                {
                    text: "cancel",
                    onPress: () => console.log("cancel"),
                },
            ],
            customMenu: <CustomContent />,
        } />
```
