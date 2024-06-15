# Compound Components

This is usually a combination of simple core components with custom styling applied on top of it. 

## PageView

Usage: This component is used to display a page and a menu stacked.

### Params

- pages: The actual content of the pages to be rendered.
- menu: The menu to be rendered on the right side of the page.
- mainTitle?: The top title of the page context.

### Page Params Breakdown

```typescript
    object: {
        page: ReactNode,
        title: string,
    } []
``` 

### Menu Params Breakdown

```typescript
    object: {
        menuType: "simple" | "icon-list" | "custom-list" | "none"
        list?: [
            {
                text: string,
                onPress: () => void,
                Icon?: ReactNode,
            }
        ],
        custom?: ReactNode,
    }
```

### Examples

Page with description menu and icon collapsed menu

```jsx
        <PageView pages={[{
            page: <View>
                <Text>Page Content</Text>
            </View>, 
            title: "Page Title"
        }]
        } menu={
            menuType: "simple",
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

Page with custom menu and custom content for 2 pages

```jsx
        <PageView page={
            [
                {
                    page: <View>
                        <Text>Page Content</Text>
                    </View>, 
                    title: "Page Title"
                },
                {
                    page: <View>
                        <Text>Page Content 2</Text>
                    </View>, 
                    title: "Page Title 2"
                },
            ]
        } menu={
            menu: "custom-list",
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
            custom: <CustomMenu />,
        } />
```

Page with list menu and custom content

```jsx
        <PageView page={
            [
                {
                    page: <View>
                        <Text>Page Content</Text>
                    </View>, 
                    title: "Page Title"
                },
                {
                    page: <View>
                        <Text>Page Content 2</Text>
                    </View>, 
                    title: "Page Title 2"
                },
            ]
        } menu={
            menuType: "icon-list",
            list: [
                {
                    text: "done",
                    onPress: () => console.log("done"),
                    icon: <Check width={20} stroke={"white"} strokeWidth={3} />,
                },
                {
                    text: "cancel",
                    onPress: () => console.log("cancel"),
                    icon: <X width={20} stroke={"white"} strokeWidth={3} />,
                },
            ],
            custom: <CustomContent />,
        } />
```

## PageContent 

Usage: This component is used to display a page content as a list of items.

### Params

- items: The list of items to be displayed. These are Components.

### Examples

```jsx
        <PageContent items={[
            <Text>Item 1</Text>,
            <Text>Item 2</Text>,
            <Text>Item 3</Text>,
        ]} />
```
