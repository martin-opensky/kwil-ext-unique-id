## Helpers Extension

This extension provides helpers to the actions to simplify important functions such as creating unique Ids and dates. Additional methods can also be added to extend the functions available, but for now only 2 exist.

**Repo:** https://github.com/martin-opensky/kwil-extension-helpers

### helper.id()

Without this function, an Id has to be supplied to each action that inserts data to a table. This makes tracking unique Id's more complicated than it needs to be. By using this method, we can be sure that the Id will be unique without having to create one prior to executing the action. This uses nanoid() to ensure a universally unique ID is generated.

### helper.date()

This enables dates to be automatically created within the action. It currently only supports 'now' but could easily be expanded to add support for other date strings. e.g '+ 1 day', '+ 1 week' etc

Before using the helpers both id's and date's have to be constructed before calling the action:

<div style="display: flex; justify-content: space-between;">
<img src="https://lets.embrace.community/arweave-hack/helper-before.png" style="height: 120px;" />
</div>

With the helper methods these values are created automatically, and only the $message parameter needs to be provided.

<div style="display: flex; justify-content: space-between;">
<img src="https://lets.embrace.community/arweave-hack/helper-after.png" style="height: 200px;" />
</div>
